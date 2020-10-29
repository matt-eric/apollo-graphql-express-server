import models from '../graphQL/models';

const noise = new models.effect({
  type: 'noise',
  displayName: 'Noise',
  bypass: false,
  settings: [
    {
      type: 'behavior',
      displayName: 'Behavior',
      value: { value: 10 },
      max: { value: 40 },
      min: { value: 1 },
      step: { value: 1 }
    },
    {
      type: 'speed',
      displayName: 'Speed',
      value: { value: .08 },
      max: { value: .1 },
      min: { value: .01 },
      step: { value: .01 }
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
      value: { value: .75 },
      max: { value: .99 },
      min: { value: 0 },
      step: { value: .01 }
    },
    {
      type: 'points',
      displayName: 'Point Radius',
      value: { value: 3 },
      max: { value: 15 },
      min: { value: 1 },
      step: { value: 1 }
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
      value: { value: .87 },
      max: { value: .99 },
      min: { value: 0 },
      step: { value: .01 }
    },
    {
      type: 'columns',
      displayName: 'Columns',
      value: { value: 15 },
      max: { value: 15 },
      min: { value: 1 },
      step: { value: 1 }
    },
    {
      type: 'rows',
      displayName: 'Rows',
      value: { value: 15 },
      max: { value: 15 },
      min: { value: 1 },
      step: { value: 1 }
    }
  ],
});

const effects = { noise, waveform, gridcells }

export default effects
