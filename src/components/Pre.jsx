import { ContentCopy } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Pre = ({ children }) => {
    return (
        <pre className='code-content'>
            {children}
            <IconButton className='copy-button'>
                <ContentCopy></ContentCopy>
            </IconButton>
        </pre>
    );
}

export default Pre;