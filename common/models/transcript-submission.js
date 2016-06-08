module.exports = function(TranscriptSubmission) {
  TranscriptSubmission.beforeRemote('create', function(ctx, unused, next){
    ctx.req.body.userID = ctx.req.get('sm_user') || ctx.req.get('smgov_userdisplayname') || 'unknown'
    next()
  })
};
