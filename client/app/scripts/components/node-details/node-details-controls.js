import React from 'react';
import _ from 'lodash';

import NodeDetailsControlButton from './node-details-control-button';

export default function NodeDetailsControls({controls, error, nodeId, pending}) {
  let spinnerClassName = 'fa fa-circle-o-notch fa-spin';
  if (pending) {
    spinnerClassName += ' node-details-controls-spinner';
  } else {
    spinnerClassName += ' node-details-controls-spinner hide';
  }

  return (
    <div className="node-details-controls">
      {error && <div className="node-details-controls-error" title={error}>
        <span className="node-details-controls-error-icon fa fa-warning" />
        <span className="node-details-controls-error-messages">{error}</span>
      </div>}
      <span className="node-details-controls-buttons">
        {_.sortBy(controls, 'rank').map(control => <NodeDetailsControlButton
          nodeId={nodeId} control={control} pending={pending} key={control.id} />)}
      </span>
      {controls && <span title="Applying..." className={spinnerClassName}></span>}
    </div>
  );
}
