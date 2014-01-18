/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'fujisawa_budget_2013';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {


  /* fujisawa config */
  '1': { icon: 'icons/civilian-action.svg', color: '#009EAA', bcolor: '#935B3B' },//議会費
  '1-1': { icon: 'icons/civilian-action.svg', color: '#009EAA', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#009EAA', bcolor: '#0AB971' },//総務費
  '2-1': { icon: 'icons/publicaffairs.svg', color: '#009EAA', bcolor: '#0AB971' }, //総務管理費
  '2-2': { icon: 'icons/japanese-moneyublicaffairs.svg', color: '#009EAA', bcolor: '#0AB971' }, //徴税費
  '2-3': { icon: 'icons/payroll.svg', color: '#009EAA', bcolor: '#0AB971' },//戸籍住民基本台帳費
  '2-4': { icon: 'icons/vote.svg', color: '#009EAA', bcolor: '#0AB971' },// 選挙費
  '2-5': { icon: 'icons/ekonomija.svg', color: '#009EAA', bcolor: '#0AB971' }, // 統計調査費
  '2-6': { icon: 'icons/financial-admin.svg', color: '#009EAA', bcolor: '#0AB971' },// 監査委員費
  '2-7': { icon: 'icons/c_syoubou_bousai.svg', color: '#009EAA', bcolor: '#0AB971' }, // 防災費
  '3': { icon: 'icons/environment.svg', color: '#009EAA', bcolor: '#4E6D00' },//環境保全費
  '3-1': { icon: 'icons/environment.svg', color: '#009EAA', bcolor: '#4E6D00' }, // 環境保全費
  '4': { icon: 'icons/family.svg', color: '#009EAA', bcolor: '#D33673' },// 民生費
  '4-1': { icon: 'icons/c_kenkou_fukushi.svg', color: '#009EAA', bcolor: '#D33673' }, // 社会福祉費
  '4-2': { icon: 'icons/child.svg', color: '#009EAA', bcolor: '#D33673' }, // 子育て支援費
  '4-3': { icon: 'icons/economic-aid.svg', color: '#009EAA', bcolor: '#D33673' }, // 生活保護費
  '4-4': { icon: 'icons/aid-developing-countries.svg', color: '#009EAA', bcolor: '#D33673' }, // 災害救助費
  '5': { icon: 'icons/health.svg', color: '#009EAA', bcolor: '#2A3A03' },//衛生費
  '5-1': { icon: 'icons/legislative.svg', color: '#009EAA', bcolor: '#2A3A03' }, // 保健衛生費
  '5-2': { icon: 'icons/waste.svg', color: '#009EAA', bcolor: '#2A3A03' }, // 清掃費 
  '5-3': { icon: 'icons/health.svg', color: '#009EAA', bcolor: '#2A3A03' }, // 看護専門学校費
  '5-4': { icon: 'icons/hospital.svg', color: '#009EAA', bcolor: '#2A3A03' }, // 病院費
  '6': { icon: 'icons/payroll.svg', color: '#009EAA', bcolor: '#EC2406' },//労働費
  '6-1': { icon: 'icons/payroll.svg', color: '#009EAA', bcolor: '#EC2406' },// 労働諸費
  '7': { icon: 'icons/farms.svg', color: '#009EAA', bcolor: '#938626' },//農林水産業費
  '7-1': { icon: 'icons/farms.svg', color: '#009EAA', bcolor: '#938626' },// 農業費
  '7-2': { icon: 'icons/fishing.svg', color: '#009EAA', bcolor: '#938626' }, // 水産業費
  '8': { icon: 'icons/sangyou3.svg', color: '#009EAA', bcolor: '#C75746' },//商工費
  '8-1': { icon: 'icons/sangyou3.svg', color: '#009EAA', bcolor: '#C75746' },// 商工費
  '8-2': { icon: 'icons/tourism.svg', color: '#009EAA', bcolor: '#C75746' }, // 観光費
  '9': { icon: 'icons/construction.svg', color: '#009EAA', bcolor: '#D33673' },//土木費
  '9-1': { icon: 'icons/construction.svg', color: '#009EAA', bcolor: '#D33673' }, // 土木管理費
  '9-2': { icon: 'icons/order-safety.svg', color: '#009EAA', bcolor: '#D33673' }, // 道路橋りょう費
  '9-3': { icon: 'icons/order-safety.svg', color: '#009EAA', bcolor: '#D33673' }, // 河川費
  '9-4': { icon: 'icons/machi.svg', color: '#009EAA', bcolor: '#D33673' }, // 都市計画費
  '9-5': { icon: 'icons/housing.svg', color: '#009EAA', bcolor: '#D33673' }, // 住宅費
  '10': { icon: 'icons/c_shyoubou.svg', color: '#009EAA', bcolor: '#790586' },// 消防費
  '10-1': { icon: 'icons/c_shyoubou.svg', color: '#009EAA', bcolor: '#790586' }, // 消防費
  '11': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' },// 教育費
  '11-1': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' },// 教育総務費
  '11-2': { icon: 'icons/primary.svg', color: '#009EAA', bcolor: '#790586' }, // 小学校費
  '11-3': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' }, // 中学校費
  '11-4': { icon: 'icons/school-art-disabilities.svg', color: '#009EAA', bcolor: '#790586' }, // 特別支援学校費
  '11-5': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' }, // 学校給食費
  '11-6': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' }, // 社会教育費
  '11-7': { icon: 'icons/schools.svg', color: '#009EAA', bcolor: '#790586' }, // 保険体育費
  '12': { icon: 'icons/japanese-money.svg', color: '#009EAA', bcolor: '#790586' },//公債費
  '12-1': { icon: 'icons/japanese-money.svg', color: '#009EAA', bcolor: '#790586' },
  '13': { icon: 'icons/social-systems.svg', color: '#009EAA', bcolor: '#790586' },//予備費
  '13-1': { icon: 'icons/social-systems.svg', color: '#009EAA', bcolor: '#790586' }
  
};



