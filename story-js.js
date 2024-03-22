document
  .querySelector('.horizontal-friends-list')
  .addEventListener('mousemove', ({target,clientX,clientY}) => {
    if (target.nodeName !== 'PICTURE' && target.nodeName !== 'IMG') 
      return

    const angle = 90 + getAngle(target, clientX, clientY)

    target
      .closest('picture')
      .attributeStyleMap.set('--angle', `${angle}deg`)
  })

const getAngle = (element, clientX, clientY) => {
  const { x, y, width, height } = element.getBoundingClientRect()
  
  const dx = clientX - (x + 0.5 * width)
  const dy = clientY - (y + 0.5 * height)
  
  return Math.atan2(dy, dx) * 180 / Math.PI
}