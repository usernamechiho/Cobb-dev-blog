import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface IHandlerPropsType {
  handler?: () => void
}

function CloseIconButton({ handler = () => {} }: IHandlerPropsType) {
  return (
    <IconButton aria-label='close' onClick={handler}>
      <CloseIcon style={{ fontSize: '25px', color: 'white' }} />
    </IconButton>
  )
}

export default CloseIconButton
