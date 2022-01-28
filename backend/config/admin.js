module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '306be520648c073cef0a416cb5f64975'),
  },
});
