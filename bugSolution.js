```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Use a condition to stop the loop
    if (count < 10) { 
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```