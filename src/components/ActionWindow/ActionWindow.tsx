import React from 'react';
import classNames from 'classnames';

import './ActionWindow.scss';

type Props = {
  actions: string,
}

export const ActionWindow: React.FC<Props> = ({ actions }) => {
  const added = actions === 'Слово довавлено.';
  const error = actions !== 'Слово довавлено.';

  return (
    <div className={classNames("ActionWindow",
      {
        "ActionWindow--added": added,
        "ActionWindow--error": error,
      })}>
      <span>{actions}</span>
    </div>
  )
}
