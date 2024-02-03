import css from './OrtSpielprogramm.module.css';

export default function OrtSpielprogramm() {
  return (
    <div>
      <h1>Spielprogramm</h1>
      <div>
        <div className={css.circle}>
          <div className={css.circle_color}>1</div>
        </div>
      </div>
      <button>Starten</button>
    </div>
  );
}
