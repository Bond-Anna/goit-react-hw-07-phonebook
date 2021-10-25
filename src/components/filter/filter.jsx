import css from "./filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  );
}
