import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
          {(item['children'] || []).length > 0
            && (<ul className={styles['submenu__list']}>
              {item['children'].map((child) => (
                <li className={styles['submenu__list-item']} key={child.path}>
                  <Link
                    to={child.path}
                    className={styles['submenu__list-item-link']}
                    activeClassName={styles['submenu__list-item-link--active']}
                  >
                    {child.label}
                  </Link>
                  {(child['children'] || []).length > 0
                    && (<ul className={styles['submenu__list']}>
                      {child['children'].map((grandChild) => (
                        <li className={styles['submenu__list-item']} key={grandChild.path}>
                          <Link
                            to={grandChild.path}
                            className={styles['submenu__list-item-link']}
                            activeClassName={styles['submenu__list-item-link--active']}
                          >
                            {grandChild.label}
                          </Link>
                        </li>
                      ))}
                    </ul>)
                  }
                </li>
              ))}
              </ul>)
          }
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
