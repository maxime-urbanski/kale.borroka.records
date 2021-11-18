echo "Waiting for database"
    while ! mysql -ukbrdb -p kbrdb.0161 -h db-kbr -P 3306 -e "show databases" --ssl-mode=DISABLED 2>/dev/null
    do
      date
      sleep 5
    done
