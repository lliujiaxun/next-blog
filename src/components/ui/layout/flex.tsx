import classnames from 'classnames'
import style from './flex.module.scss'

interface IFlex {
  align?: 'flex-start' | 'center' | 'flex-end'
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
  wrap?: 'wrap'
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  center?: boolean
  children: string | React.ReactNode
  className?: string
}
export default function Flex(props: IFlex) {
  const { children, align, justify, wrap, direction, className, center = false } = props
  return (
    <div
      className={classnames(...[style.flex, className], {
        [style['align-center']]: align === 'center' || center,
        [style['align-flex-start']]: align === 'flex-start',
        [style['align-flex-end']]: align === 'flex-end',

        [style['justify-center']]: justify === 'center' || center,
        [style['justify-flex-start']]: justify === 'flex-start',
        [style['justify-flex-end']]: justify === 'flex-end',
        [style['justify-space-around']]: justify === 'space-around',
        [style['justify-space-between']]: justify === 'space-between',

        [style['wrap']]: wrap === 'wrap',

        [style['direction-row']]: direction === 'row',
        [style['direction-column']]: direction === 'column',
        [style['direction-row-reverse']]: direction === 'row-reverse',
        [style['direction-column-reverse']]: direction === 'column-reverse'
      })}
    >
      {children}
    </div>
  )
}
