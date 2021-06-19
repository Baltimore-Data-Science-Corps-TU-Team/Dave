import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioMapConfig({mapConfig, handleMapConfigChange}) {
console.log("map-config",mapConfig)
  return ( 
    <FormControl component="fieldset">
      <FormLabel component="legend">Map Configuration</FormLabel>
      <RadioGroup aria-label="mapConfig" name="mapConfig" value={mapConfig} onChange={handleMapConfigChange}>
        <FormControlLabel value="cluster" control={<Radio />} label="Cluster Visualization" />
        <FormControlLabel value="description" control={<Radio />} label="Points by description" />
        <FormControlLabel value="weapon" control={<Radio />} label="Points by weapon" />
        <FormControlLabel value="region" control={<Radio />} label="Points by region" />
        <FormControlLabel value="point-only" control={<Radio />} label="Points Only" />
        <FormControlLabel value="other" control={<Radio />} label="Custom" />
      </RadioGroup>
    </FormControl>
  );
}
