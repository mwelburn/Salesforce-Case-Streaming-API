# Streaming API POC - New Case Feed

The premise of this POC was to setup a Visualforce page on the sidebar and as a page in Salesforce1 Mobile that allowed users to monitor new cases being filed. The list is color coded based on priority level.

There are plenty of inefficiences and lack of error handling in the CometD usage and AngularJS implementation, but it is stubbed out enough to show the possibilities.

## Mobile Case Stream 
![Mobile Case Stream](http://mwelburn.github.com/Salesforce-Case-Streaming-API/images/mobile-case-stream.png)

## Desktop Case Stream
![Desktop Case Stream](http://mwelburn.github.com/Salesforce-Case-Streaming-API/images/desktop-case-stream.png)

## Installation Link

https://login.salesforce.com/packaging/installPackage.apexp?p0=04ti00000004Nyh

## Setup Steps

1. Ensure profile access is set up for the following:
  * **Case Fields:** Account_Name__c, CaseNumber, Contact_Name__c, Priority, Subject
  * **Visualforce Page:** NotificationFeed
  * **Custom Tab:** Case Stream

2. Create the PushTopic
  * Reference the following snippet to run as Anonymous Apex:
   
```
  PushTopic pushTopic = new PushTopic();
  pushTopic.ApiVersion = 29.0;
  pushTopic.Name = 'NewCases';
  pushTopic.Description = 'New Cases';
  pushTopic.Query = 'SELECT Id, Account_Name__c, Contact_Name__c, CaseNumber, Subject, Priority FROM Case';
  pushTopic.NotifyForFields = 'All';
  pushTopic.NotifyForOperationCreate = true;
  insert pushTopic;
```

3. For Home Page Layout:
  * Follow the steps for [Adding the Home Page Component to your sidebar](http://help.bluemangolearning.com/m/salesforce/l/24429-adding-the-home-page-component-to-your-sidebar)
  * Choose the Case Stream (narrow left) component
    * If the component appears too tall for your liking, edit the HTML of the component to lessen the height of the iframe
  * Ensure you customize your UI to set "Show Custom Sidebar Components on All Pages" in order to view the component on pages besides the Home tab

4. For Salesforce1:
 * Ensure Visualforce Page is enabled for Mobile
 * Follow the steps for [Adding Visualforce Tabs to Mobile Configurations](http://www.salesforce.com/us/developer/docs/pages/Content/pages_mobile_configs.htm)

## Helpful Links

* [developerforce - Streaming API](http://wiki.developerforce.com/page/Streaming_API)
* [Getting Started with the Force.com Streaming API](http://wiki.developerforce.com/page/Getting_Started_with_the_Force.com_Streaming_API)
* [Salesforce1 Style Guide](http://sfdc-styleguide.herokuapp.com/)
  * Colors where referenced from here