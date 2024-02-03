import { OrtData } from './OrtData';

export default function TischOrt() {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(OrtData[0]).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {OrtData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
