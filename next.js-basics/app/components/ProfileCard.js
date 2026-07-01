import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, band, instrument }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <div className="text-red-600 font-serif">Instrument: {instrument}</div>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      >
        Bands: {band}
      </div>
    </div>
  );
}
