import { Link } from "react-router-dom";

const OrtData = [
  {
    Ort: 'Person mit Artikel',
    Woher: 'von D.',
    Wo: 'bei D.',
    Wohin: 'zu D.',
  },
  {
    Ort: 'Ort ohne Artikel',
    Woher: 'aus',
    Wo: 'in',
    Wohin: 'nach',
  },
  {
    Ort: 'Ort mit Artikel',
    Woher: 'aus D.',
    Wo: 'in D.',
    Wohin: 'in A.',
  },
  {
    Ort: 'Station',
    Woher: 'von D.',
    Wo: 'an D.',
    Wohin: 'zu D.',
  },
  {
    Ort: 'Insel',
    Woher: 'von D.',
    Wo: 'auf D.',
    Wohin: 'auf A.',
  },
  { Ort: 'Hause', Woher: 'von', Wo: 'zu', Wohin: 'nach' },
  {
    Ort: 'Hof/Platz/Markt',
    Woher: 'von D.',
    Wo: 'auf D.',
    Wohin: 'zu D. / auf A.',
  },
  {
    Ort: 'Aktivität',
    Woher: 'von D.',
    Wo: 'bei D.',
    Wohin: 'zu D.',
  },
  {
    Ort: 'Wasser',
    Woher: 'von D.',
    Wo: 'an D.',
    Wohin: 'zu D./an A.',
  },
];

export default function OrtPractice() {
    return (
      <div>
        <h1>woher/wo/wohin</h1>
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
        <Link to="/Spielprogramm">Üben</Link>
      </div>
    );
}
