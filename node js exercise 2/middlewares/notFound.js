export const notFound = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} nout found `);
  error.statusCode = 404;
  next(error);
};
