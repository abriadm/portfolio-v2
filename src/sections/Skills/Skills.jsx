import styles from './SkillsStyle.module.css'
import { skills } from '../../common/data'
import SkillList from '../../common/SkillList'
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";

function Skills() {
        const { theme } = useTheme();
        const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

        return (
            <section id='skills' className={styles.container}>
                <h1 className='sectionTitle'>Skills</h1>
                <div className={styles.skillList}>
                    {skills.map((item) => (
                        <SkillList key={item.id} skill={item.skill} src={checkMarkIcon} />
                    ))}
                </div>
            </section>
        )
    }

export default Skills