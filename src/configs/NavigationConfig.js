import { 
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  UserOutlined,
  RobotOutlined,
  MailOutlined,
  BulbOutlined,
  SettingOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const homeNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Главное меню',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'home-dashboard',
      path: `${APP_PREFIX_PATH}/home/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'home-catalog',
      path: `${APP_PREFIX_PATH}/home/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'home-catalog-products',
          path: `${APP_PREFIX_PATH}/home/catalog/products`,
          title: 'Товары',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'home-catalog-categories',
          path: `${APP_PREFIX_PATH}/home/catalog/categories`,
          title: 'Категории',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'home-catalog-collections',
          path: `${APP_PREFIX_PATH}/home/catalog/collections`,
          title: 'Коллекции',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'home-catalog-combos',
          path: `${APP_PREFIX_PATH}/home/catalog/combos`,
          title: 'Комбо',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'home-orders',
      path: `${APP_PREFIX_PATH}/home/orders`,
      title: 'Заказы',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'home-clients',
      path: `${APP_PREFIX_PATH}/home/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'home-clients-list',
          path: `${APP_PREFIX_PATH}/home/clients/list`,
          title: 'Список клиентов',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'home-clients-groups',
          path: `${APP_PREFIX_PATH}/home/clients/groups`,
          title: 'Группы клиентов',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'home-banners',
      path: `${APP_PREFIX_PATH}/home/banners`,
      title: 'Баннеры',
      icon: PieChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'home-promocodes',
      path: `${APP_PREFIX_PATH}/home/promocodes`,
      title: 'Промокоды',
      icon: PlusCircleOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'home-addresses',
      path: `${APP_PREFIX_PATH}/home/addresses`,
      title: 'Оффлайн точки',
      icon: BulbOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'home-addresses-address',
          path: `${APP_PREFIX_PATH}/home/addresses/address`,
          title: 'Адреса',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'home-addresses-geo',
          path: `${APP_PREFIX_PATH}/home/addresses/geo`,
          title: 'Геозоны',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'home-employees',
      path: `${APP_PREFIX_PATH}/home/employees`,
      title: 'Сотрудники',
      icon: RobotOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'home-mailing',
      path: `${APP_PREFIX_PATH}/home/mailing`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]
const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobile-app',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...homeNavTree,
  ...systemNavTree,
]

export default navigationConfig;
