import React from 'react';
import { createRoot } from 'react-dom/client';
import { getInitialData, showFormattedDate } from './utils';

import NoteInput from './components/NoteInput';

// import style
import './styles/style.css';
import NoteApp from './components/NoteApp';

console.log(showFormattedDate);

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);