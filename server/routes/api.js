const express = require('express'),
    router = express.Router(),
    Comment = require('../models/comment');

module.exports = router;


/**
 *  Seed a comment
 */
router.get('/comments/seed', (req, res) => {
  const newComment = Comment({
    name: 'James Lu',
    comment: 'Have a good day!',
    date: String(new Date())
  });

  newComment.save( err => {
    if (err) {
      res.send('Error of seeding');
    }

    res.send('Seed successfully!');
  });
});


/**
 *  Get all Comments
 */
router.get('/comments', (req, res) => {
    Comment.find({}, (err, doc) => {
        if (err) {
          res.status(404);
          res.send('Comments are not found');
        }

        res.json(doc);
    });
});


/**
 *  Get single Comment
 */
router.get('/comments/:id', (req, res) => {
    Comment.findOne({ id: req.params.id }, (err, doc) => {
        if (err) {
          res.status(404);
          res.send('Comment is not found');
        }

        res.json(doc);
    });
});


/**
 *  Create a comment
 */
router.post('/comments', (req, res) => {
    const body = req.body;
    const newComment = new Comment({
        name: body.name,
        comment: body.comment,
        date: new Date(body.date)
    });

    newComment.save( err => {
        if (err) {
            res.send('Creating Error Happened');
        }

        res.send('Post comment successfully');
    });
});


/**
 *  Update a comment
 */
router.put('/comments/:id', (req, res) => {
    const body = req.body;
    Comment.findOne( { id: req.params.id }, (err, doc) => {
        if (err) {
            res.status(404);
            res.send('Update Error');
        }
        doc.name = body.name;
        doc.comment = body.comment;
        doc.date = body.date;

        doc.save( err => {
            if (err) {
                res.send('Update Error');
            }

            res.send('Update Comment Successfully');
        });
    });
});


/**
 *  Delete a comment
 */
router.delete('/comments/:id', (req, res) => {
    Comment.remove( { id: req.params.id }, (err, doc) => {
        if (err) {
            err.send('Delete Comment Error');
        }

        res.json(doc);
    });
});



