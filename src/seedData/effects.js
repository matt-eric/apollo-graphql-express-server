import models from '../graphQL/models';

const noise = new models.effect({
  type: 'noise',
  displayName: 'Noise',
  bypass: false,
  settings: [
    {
      type: 'behavior',
      displayName: 'Behavior',
      value: 10000,
      max: 40000,
      min: 1000,
      step: 1000
    },
    {
      type: 'speed',
      displayName: 'Speed',
      value: 40,
      max: 50,
      min: 1,
      step: 1
    },
  ],
});

const waveform = new models.effect({
  type: 'waveform',
  displayName: 'Waveform',
  pointShape: "circle",
  bypass: false,
  settings: [
    {
      type: 'alpha',
      displayName: 'Alpha',
      value: 750,
      max: 990,
      min: 0,
      step: 10
    },
    {
      type: 'points',
      displayName: 'Point Radius',
      value: 3000,
      max: 15000,
      min: 1000,
      step: 1000
    },
  ],
});

const gridcells = new models.effect({
  type: 'gridCells',
  displayName: 'Grid Cells',
  bypass: false,
  settings: [
    {
      type: 'focus',
      displayName: 'Focus',
      value: 870,
      max: .990,
      min: 0,
      step: 10
    },
    {
      type: 'columns',
      displayName: 'Columns',
      value: 15000,
      max: 15000,
      min: 1000,
      step: 1000
    },
    {
      type: 'rows',
      displayName: 'Rows',
      value: 15000,
      max: 15000,
      min: 1000,
      step: 1000
    }
  ],
});

const effects = { noise, waveform, gridcells }

export default effects
