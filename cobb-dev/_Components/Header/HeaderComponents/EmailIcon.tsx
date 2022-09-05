import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import { useRecoilState } from 'recoil'
import { isEmailModal } from 'Atoms/atom'

function EmailIcon() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useRecoilState(isEmailModal)

  const handleOpenEmailModal = () => setIsEmailModalOpen(true)

  return (
    <MenuItem onClick={handleOpenEmailModal}>
      <ListItemIcon>
        <AttachEmailIcon fontSize='medium' style={{ color: 'black' }} />
      </ListItemIcon>
      <ListItemText style={{ color: '#666666' }}>이메일 전송</ListItemText>
    </MenuItem>
  )
}

export default EmailIcon
