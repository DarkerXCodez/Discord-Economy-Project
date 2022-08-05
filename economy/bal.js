module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball'],
  code: `$title[Your Balance $username]
$thumbnail[$userAvatar[$authorID]]
$description[💵 **| Cash**
$$getGlobalUserVar[cash]

💳 **| Bank**
$$getGlobalUserVar[bank]]
$color[$random[0;999999]]
$footer[Tip: Money can be increased by working,claiming daily money doing heists,etc!]
$addTimestamp`
}