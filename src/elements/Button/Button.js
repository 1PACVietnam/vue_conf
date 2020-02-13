import styled from 'vue-styled-components'
import colors from '@/constants/styles/colors'

const styleButton = status => {
  switch (status) {
    case 'primary':
      return `
        background-color: ${colors.white};
        color: ${colors.primary};
      `
    case 'error':
      return `
        background-color: ${colors.white};
        color: ${colors.error};
      `
    case 'success':
      return `
        background-color: ${colors.white};
        color: ${colors.success};
      `
    default:
      return `
        background-color: ${colors.white};
        color: ${colors.default};
      `
  }
}

const btnProps = {
  status: String
}

const Button = styled('button', btnProps)`
  font-size: 20px;
  text-align: center;
  padding: 8px;
  ${(props) => styleButton(props.status)};

  &:hover {
    cursor: pointer;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`

export default Button
