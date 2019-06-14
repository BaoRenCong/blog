var sqlMap = {
  getValue: 'SELECT title,ndate,introduce,preface,category FROM NOTES WHERE nid = ?',
  setValue: 'UPDATE NOTES SET name = ? WHERE id = ?',
  getNotes: 'SELECT nid,title,ndate,introduce,category FROM NOTES order by ndate desc'
}

module.exports = sqlMap;