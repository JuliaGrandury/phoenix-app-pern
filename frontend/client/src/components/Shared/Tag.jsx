import React from 'react'

const tagColors = {
  'Industry Advice': 'rgba(24, 144, 255, 0.9)',
  'Code Review': 'rgba(150, 111, 214, 1)',
  'Resume Review': 'rgba(150, 111, 214, 1)',
  'Mock Interview': 'rgba(0, 175, 155, 0.9)',
  'Referral to Company': 'rgba(239, 71, 67, 0.9)',
  'Referral to Connection': 'rgba(255, 184, 0, 0.9)',
}

const Tag = ({ label }) => {

  const tagStyles = {
    margin: '2px 0px',
    marginRight: '3px',
    padding: '4px 6px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 600,
    backgroundColor: `${tagColors[label]}`
  }

  return (
    <div style={tagStyles}>{label}</div>
  )
}

export default Tag



