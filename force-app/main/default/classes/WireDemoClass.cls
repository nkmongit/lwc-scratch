public with sharing class WireDemoClass {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    try {
      List<Account> accDetail = [SELECT Id, Name FROM Account LIMIT 10];
      return accDetail;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
