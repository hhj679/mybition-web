import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Input, Dropdown } from 'antd'
import styles from './Header.less'
import Menus from './Menu'

const SubMenu = Menu.SubMenu

function Header ({ user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu }) {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }

  const rightMenu = (<Menu mode="horizontal" onClick={handleClickMenu} style={{width: '200px'}}>
      <Menu.Item key="accountSetting" className="menuItem">帐号设置</Menu.Item>
      <Menu.Item key="preferenceSetting" className="menuItem">偏好设置</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="update" className="menuItem" style={{clolr: '#3d8f5'}}>升级</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="shortcut" className="menuItem">快捷键</Menu.Item>
      <Menu.Item key="donwload" className="menuItem">应用下载</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="international" className="menuItem">切换至国际服务器</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="logout" className="menuItem">退出</Menu.Item>
    </Menu>);
  return (
    <div className={styles.header}>
      <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} style={{color: '#CCC'}}/>
      </div>
      <div className={styles.leftWarpper}>
        <span title="个人项目" className={styles.nameLimit}>个人项目</span>
        <Input prefix={<Icon type="search" style={{fontSize: 14}}/>} placeholder="在个人项目中搜索" className={styles.searchInput}/>
        <Icon type="plus-circle" className={styles.plusIcon}/>
      </div>
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="question-circle-o" className={styles.question} />
        </div>
        <div className={styles.button}>
          我的 
        </div>
         <div className={styles.button}>
          日历
        </div>
        <div className={styles.button}>
          <Icon type="bell" className={styles.message} />
        </div>
        <div className={styles.button}>
          <Icon type="solution" className={styles.message} />
        </div>
        <Dropdown overlay={rightMenu} trigger={['click']}>
          <img className={styles.avatar} src={require('../../assets/avatar.jpg')}></img>
        </Dropdown>
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header
