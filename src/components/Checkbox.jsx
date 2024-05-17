export default function Checkbox({ children, checked, onChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="blind"
        defaultChecked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}
