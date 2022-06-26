import type { HTMLProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from 'tss-react/mui'
import type { Theme } from '@mui/material'

interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  title?: string
}

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(3),
    paddingBottom: 120,
    position: 'relative',
  },
}))

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ className, children, title = '', ...rest }, ref) => {
    const { classes, cx } = useStyles()

    return (
      <div ref={ref} className={cx(classes.root, className)} {...rest}>
        <Helmet>
          <title>{title} | Sandbox</title>
        </Helmet>
        {children}
      </div>
    )
  }
)
