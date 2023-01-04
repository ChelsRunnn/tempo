const router = require('express').Router();
const { User, Post, Project } = require('../models');

// All GET routes
// Homepage - all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Project,
                    attributes: ['name'],
                    include: [
                        {
                            model: User,
                            attributes: ['firstName', 'lastName']
                        }
                    ]
                },
            ],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
            userId: req.session.userId
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one User
// Profile 
router.get('/profile/:id', async (req, res) => {
    try {
        const profileData = await User.findByPk(req.params.id, {
            include: [
            {
                model: Project,
                include: [
                    {
                        model: Post
                    }
                ]
            },
            ],
        });
        console.log('profileData log', profileData);
        const profile = profileData.get({ plain: true });
        console.log('profile log', profile);
        res.render('profile', { profile, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Signup route
router.get('/signup', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
