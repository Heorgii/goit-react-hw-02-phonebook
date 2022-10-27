import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    
    return (
        <div className={css.filter_box}>
            <label>
                Find contacts by name
                <input type="name" value={value} onChange={onChange}
                    className={css.filter_input}
                />
            </label>
        </div>
    );
};

Filter.protoType = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

// export default Filter;