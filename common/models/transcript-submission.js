module.exports = function(TranscriptSubmission) {
  TranscriptSubmission.beforeRemote('create', function(ctx, unused, next){
    ctx.req.body.userID = 'aaa'
    next()
  })
};
