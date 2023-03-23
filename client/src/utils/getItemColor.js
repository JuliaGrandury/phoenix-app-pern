// TO DETERMINE THE COLOR OF STATUS AND PRIORITY COLUMNS IN JOB BOARD
const rowColors = {
    'To Apply': 'var(--primary-red)',
    'Applied': 'var(--primary-yellow)',
    'Interviewing': 'var(--primary-orange)',
    'Offer': 'var(--primary-green)',
    'Rejected': 'var(--primary-grey)',
    'Ghosted': 'var(--primary-grey)',
}

export const getRowColor = (label) => {
    return rowColors[label];
}


// TO DETERMINE THE COLOR OF TAGS IN NETWORK GRAPH
const tagColors = {
    'Industry Advice': 'var(--tag-blue)',
    'Code Review': 'var(--tag-purple)',
    'Resume Review': 'var(--tag-grey)',
    'Mock Interview': 'var(--tag-teal)',
    'Referral to Company': 'var(--tag-red)',
    'Referral to Connection': 'var(--tag-yellow)',
}

export const getTagColor = (label) => {
    return tagColors[label];
}

