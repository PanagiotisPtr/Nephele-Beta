import express from 'express';

var router = express.Router();

router.get('/:id', (req, res, next) => {
  res.sendFile('/data/creators/' + req.params.id + '.jpg');
});

export default router;