import PropTypes from "prop-types"

function SkillList({ src, skill }) {
  return (
    <span>
        <img src={src} alt='Checkmrk icon' />
        <p>{skill}</p>
    </span>
  )
}

SkillList.propTypes = {
    src: PropTypes.string,
    skill: PropTypes.string,
};

export default SkillList