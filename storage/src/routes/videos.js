import express from 'express';

var router = express.Router();

router.get('/:id', (req, res, next) => {
  res.sendFile('/data/videos/' + req.params.id + '.mp4');
});

export default router;