var isSquare = function (n) {
  if (n >= 0)
    for (let i = 0; i <= n; i++) {
      if (i * i === n)
        return true;
      else if (i * i > n)
        return false;
    }
  else
    return false;
}