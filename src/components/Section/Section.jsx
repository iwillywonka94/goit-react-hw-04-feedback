import PropTypes from 'prop-types';

import style from './section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={style.section}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section