exports.getCurrentUser = async (req, res, next) => {
  const user = await User.findById(req.user.id)
  // const user = await User.findById(req.user.id).populate({
  //   path: 'expenses',
  //   select: '-__v', //use this form to hide/show fields
  // })
  if (!user) {
    res.status(404).json({
    error: 'User not found',
  })
  }
  res.status(200).json({
    status: 'success',
    user,
  })
}