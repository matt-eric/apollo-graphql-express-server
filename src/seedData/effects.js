import models from '../graphQL/models';

const noise = new models.effect({
  type: 'noise',
  displayName: 'Noise',
  bypass: false,
  settings: [
    {
      type: 'behavior',
      displayName: 'Behavior',
      value: 10,
      max: 40,
      min: 1,
      step: 1
    },
    {
      type: 'speed',
      displayName: 'Speed',
      value: .04,
      max: .05,
      min: .001,
      step: .001
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
      value: .75,
      max: .99,
      min: 0,
      step: .01
    },
    {
      type: 'points',
      displayName: 'Point Radius',
      value: 3,
      max: 15,
      min: 1,
      step: 1
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
      value: .87,
      max: .99,
      min: 0,
      step: .01
    },
    {
      type: 'columns',
      displayName: 'Columns',
      value: 15,
      max: 15,
      min: 1,
      step: 1
    },
    {
      type: 'rows',
      displayName: 'Rows',
      value: 15,
      max: 15,
      min: 1,
      step: 1
    }
  ],
});

const effects = { noise, waveform, gridcells }

export default effects
