import MobileDetect from 'mobile-detect'

export const detectDevice = async (userAgent) => {
  const md = await new MobileDetect(userAgent)
  const isPhone = md.phone() !== null
  const device = md.mobile()

  return { device, isPhone }
}
