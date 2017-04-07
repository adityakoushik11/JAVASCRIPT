var tester={
	vowel:function(str)
	{
		var l=str.length;
		for(var i=0;i<=l;i++)
		{
			if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u')
			{
				console.log(str.charAt(i));
			}
		}
	}
};

exports.demo=tester;
