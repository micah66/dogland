import Icons from '@/components/shared/Icon'

export const linkMap = {
  '/': { icon: Icons.Home, label: 'Home' },
  '/about': { icon: Icons.About, label: 'About' },
  '/gallery': { icon: Icons.ImagesSquare, label: 'Gallery' },
  '/kenneling': { icon: Icons.Garage, label: 'Kenneling' },
  '/training': { icon: Icons.Barbell, label: 'Training' },
  '/grooming': { icon: Icons.HairDryer, label: 'Grooming' },
  '/store': { icon: Icons.Storefront, label: 'Store' },
  '/sign-up': { icon: Icons.SignIn, label: 'Sign In / Up' },
  '/sign-out': { icon: Icons.SignOut, label: 'Sign Out' },
  '/settings': { icon: Icons.Cog, label: 'Settings' },
}

export type TLink = keyof typeof linkMap
