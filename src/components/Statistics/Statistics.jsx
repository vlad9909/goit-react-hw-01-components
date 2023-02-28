import { List, Item, Label, Percentage } from './Statistics.style';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomColor';
export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        {title}
      </h2>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item
              key={id}
              style={{
                background: getRandomHexColor(),
              }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
