import styles from './ContextMenu.module.scss';

import {useState} from 'react';
import Popup from 'reactjs-popup';

export interface ContextMenuElement{
    label: string,
    onClick: () => void
}

interface ContextMenuProps{
    trigger: JSX.Element,
    elements: ContextMenuElement[]
}

export function ContextMenu({trigger, elements} : ContextMenuProps) {
  const [menuOpenState, setMenuOpen] = useState(false);

  return (
    <Popup arrow={false} trigger={trigger} open={menuOpenState} onOpen={() => setMenuOpen(true)}>
      <div className={styles.contextMenu}>
        <button className={styles.contextMenuClose} onClick={() => setMenuOpen(false)}>&times;</button>
        <br/>
        <ul>
          {
            elements.map((element) =>
              (
                <li key={element.label} onClick={element.onClick}>{element.label}</li>
              ),
            )}
        </ul>
      </div>
    </Popup>
  );
}
