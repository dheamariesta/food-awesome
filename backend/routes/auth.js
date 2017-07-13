import express from 'express';
import User from '../user/model';
import passport from 'passport';
import passportConfig from '../config/passport';
import userController from '../user/controller';

const router = express.Router();

/* GET index page. */
router.get('/user', (req, res, next) => {
  res.json(req.user);
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

// login
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            console.log(error);
            return res.json({'error':'database','message': "Something went seriously wrong. Contact the dev team."});
        }
        if(!user) {
          return res.json({'error':'user','message': "Wrong password or email"})
        }

        req.logIn(user, function(err) {
            if (err) {
              console.log("Login err", "Wrong password");
              return res.json({'error':'user','message': "Wrong password"})
            }
            return res.json(user);
        });
    })(req, res, next);
});

// signup
router.post('/signup', function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, existingUser) => {

      console.log("Data: ",req.body.email, req.body.password)

      if (existingUser) {
          return res.json({'error':'login','message': 'This email already exists!'});
      }

      console.log("New user");

      let user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.save((err) => {
        if (err) {
          console.log("User save error");
          return res.json({'error':'database','message': err});
        }
        req.logIn(user, (err) => {
        if (err) {
            console.log("User login error");
            return res.json({'error':'login','message': err});
        }
        console.log("User login success");
        res.json({'redirect':'/'});
        });
      });
    });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
router.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
router.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);

export default router;
